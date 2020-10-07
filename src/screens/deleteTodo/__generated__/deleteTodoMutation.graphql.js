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
export type deleteTodoMutationVariables = {|
  input: deleteTodoInput
|};
export type deleteTodoMutationResponse = {|
  +deleteTodo: ?{|
    +status: ?string,
    +message: ?string,
  |}
|};
export type deleteTodoMutation = {|
  variables: deleteTodoMutationVariables,
  response: deleteTodoMutationResponse,
|};
*/


/*
mutation deleteTodoMutation(
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
    "name": "deleteTodoMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "761597b2357affbf36b974a133b67d91",
    "id": null,
    "metadata": {},
    "name": "deleteTodoMutation",
    "operationKind": "mutation",
    "text": "mutation deleteTodoMutation(\n  $input: deleteTodoInput!\n) {\n  deleteTodo(input: $input) {\n    status\n    message\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2c8954f4430ed75abd84c0220beb91a7';

module.exports = node;
