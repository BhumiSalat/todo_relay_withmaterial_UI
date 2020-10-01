/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type editTodoInput = {|
  id?: ?string,
  completed?: ?boolean,
  title?: ?string,
  clientMutationId?: ?string,
|};
export type EditTodoMutationVariables = {|
  input: editTodoInput
|};
export type EditTodoMutationResponse = {|
  +editTodo: ?{|
    +status: ?string,
    +message: ?string,
  |}
|};
export type EditTodoMutation = {|
  variables: EditTodoMutationVariables,
  response: EditTodoMutationResponse,
|};
*/


/*
mutation EditTodoMutation(
  $input: editTodoInput!
) {
  editTodo(input: $input) {
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
    "concreteType": "editTodoPayload",
    "kind": "LinkedField",
    "name": "editTodo",
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
    "name": "EditTodoMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6ac8bea0f6ac81285b0376ed2dd58bec",
    "id": null,
    "metadata": {},
    "name": "EditTodoMutation",
    "operationKind": "mutation",
    "text": "mutation EditTodoMutation(\n  $input: editTodoInput!\n) {\n  editTodo(input: $input) {\n    status\n    message\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '776ae776db3f238a85434ffae6255940';

module.exports = node;
