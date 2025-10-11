import {ROUTES} from "@/shared/model/routes";
import {Link, href} from "react-router-dom";
import {CONFIG} from "@/shared/model/config";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {rqClient} from "@/shared/api/instance";
import {useEffect, useState} from "react";

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


    return (
        <div>
            <h1>Boards list {CONFIG.API_BASE_URL}</h1>
            {
                boardsQuery?.data?.map(board => (
                    <Link to={href(ROUTES.BOARD, {boardId: board.id})}>{board.name}</Link>
                ))
            }
        </div>
    );
}

export const Component = BoardsListPage;
