import {ROUTES} from "@/shared/model/routes";
import {Link, href} from "react-router-dom";
import {CONFIG} from "@/shared/model/config";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {rqClient} from "@/shared/api/instance";

function BoardsListPage() {
    const queryClient = useQueryClient();
    const boardsQuery = useQuery(rqClient.queryOptions("get", "/boards"));

    const deleteBoardMutation = rqClient.useMutation(
        "delete",
        "/boards/{boardId}",
        {
            onSettled: () => {
                return queryClient.invalidateQueries(
                    rqClient.queryOptions("get", "/boards")
                );
            },
        }
    );

    const createBoardMutation = rqClient.useMutation("post", "/boards", {
        onSettled: () => {
            return queryClient.invalidateQueries(
                rqClient.queryOptions("get", "/boards")
            );
        },
    });

    // Debugging
    console.log("boardsQuery:", {
        data: boardsQuery.data,
        isLoading: boardsQuery.isLoading,
        isError: boardsQuery.isError,
        error: boardsQuery.error,
    });

    return (
        <div>
            <h1>Boards list {CONFIG.API_BASE_URL}</h1>
            {boardsQuery.isLoading && <p>Loading...</p>}
            {boardsQuery.isError && <p>Error: {JSON.stringify(boardsQuery.error)}</p>}
            {
                boardsQuery?.data?.map(board => (
                    <Link key={board.id} to={href(ROUTES.BOARD, {boardId: board.id})}>{board.name}</Link>
                ))
            }
        </div>
    );
}

export const Component = BoardsListPage;
