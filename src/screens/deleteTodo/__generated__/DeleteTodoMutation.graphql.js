/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteTodoInput = {|
  id?: ?string,
  clientMutationId?: ?string,
|};
export type DeleteTodoMutationVariables = {|
  input: deleteTodoInput
|};
export type DeleteTodoMutationResponse = {|
  +deleteTodo: ?{|
    +status: ?string,
    +message: ?string,
  |}
|};
export type DeleteTodoMutation = {|
  variables: DeleteTodoMutationVariables,
  response: DeleteTodoMutationResponse,
|};
*/


/*
mutation DeleteTodoMutation(
  $input: deleteTodoInput!
) {
  deleteTodo(input: $input) {
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
    "concreteType": "deleteTodoPayload",
    "kind": "LinkedField",
    "name": "deleteTodo",
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
    "name": "DeleteTodoMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8e1e6633cec6732a2709345c6c5330ba",
    "id": null,
    "metadata": {},
    "name": "DeleteTodoMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTodoMutation(\n  $input: deleteTodoInput!\n) {\n  deleteTodo(input: $input) {\n    status\n    message\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c1327c4589241412c97adf8ae6804f7a';

module.exports = node;
