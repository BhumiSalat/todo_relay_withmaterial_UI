/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createTodoInput = {|
  title?: ?string,
  clientMutationId?: ?string,
|};
export type createTodoMutationVariables = {|
  input: createTodoInput
|};
export type createTodoMutationResponse = {|
  +createTodo: ?{|
    +status: ?string,
    +message: ?string,
    +todo: ?{|
      +node: ?{|
        +id: ?string,
        +completed: ?boolean,
        +title: ?string,
      |}
    |},
  |}
|};
export type createTodoMutation = {|
  variables: createTodoMutationVariables,
  response: createTodoMutationResponse,
|};
*/


/*
mutation createTodoMutation(
  $input: createTodoInput!
) {
  createTodo(input: $input) {
    status
    message
    todo {
      node {
        id
        completed
        title
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "createTodoPayload",
    "kind": "LinkedField",
    "name": "createTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "message",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "TodoEdge",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "completed",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createTodoMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "10f72f62df71090f553cf8da64f9d4f8",
    "id": null,
    "metadata": {},
    "name": "createTodoMutation",
    "operationKind": "mutation",
    "text": "mutation createTodoMutation(\n  $input: createTodoInput!\n) {\n  createTodo(input: $input) {\n    status\n    message\n    todo {\n      node {\n        id\n        completed\n        title\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '106784e0c09022c95b4ffe38c09b80db';

module.exports = node;
