/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteCompletedTodosInput = {|
  clientMutationId?: ?string
|};
export type deleteCompletedTodosMutationVariables = {|
  input: deleteCompletedTodosInput
|};
export type deleteCompletedTodosMutationResponse = {|
  +deleteCompletedTodos: ?{|
    +status: ?string,
    +message: ?string,
  |}
|};
export type deleteCompletedTodosMutation = {|
  variables: deleteCompletedTodosMutationVariables,
  response: deleteCompletedTodosMutationResponse,
|};
*/


/*
mutation deleteCompletedTodosMutation(
  $input: deleteCompletedTodosInput!
) {
  deleteCompletedTodos(input: $input) {
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
    "concreteType": "deleteCompletedTodosPayload",
    "kind": "LinkedField",
    "name": "deleteCompletedTodos",
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
    "name": "deleteCompletedTodosMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteCompletedTodosMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "57d444e8f34165068d2cac8a79feb412",
    "id": null,
    "metadata": {},
    "name": "deleteCompletedTodosMutation",
    "operationKind": "mutation",
    "text": "mutation deleteCompletedTodosMutation(\n  $input: deleteCompletedTodosInput!\n) {\n  deleteCompletedTodos(input: $input) {\n    status\n    message\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ada3172d4a4962d8a5bad7bfdf120b3a';

module.exports = node;
