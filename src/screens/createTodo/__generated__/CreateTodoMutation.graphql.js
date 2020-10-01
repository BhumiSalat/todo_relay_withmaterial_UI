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
export type CreateTodoMutationVariables = {|
  input: createTodoInput
|};
export type CreateTodoMutationResponse = {|
  +createTodo: ?{|
    +status: ?string,
    +message: ?string,
  |}
|};
export type CreateTodoMutation = {|
  variables: CreateTodoMutationVariables,
  response: CreateTodoMutationResponse,
|};
*/


/*
mutation CreateTodoMutation(
  $input: createTodoInput!
) {
  createTodo(input: $input) {
    status
    message
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
    "name": "CreateTodoMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "85e5594b4de61f8b7cefacd7f3a468a9",
    "id": null,
    "metadata": {},
    "name": "CreateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTodoMutation(\n  $input: createTodoInput!\n) {\n  createTodo(input: $input) {\n    status\n    message\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd167595745ccd50bb78a63790ff05a58';

module.exports = node;
