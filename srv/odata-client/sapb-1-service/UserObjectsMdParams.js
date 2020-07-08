"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserObjectsMdParams = exports.UserObjectsMdParamsField = exports.createUserObjectsMdParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UserObjectsMdParams.build]] instead.
 */
function createUserObjectsMdParams(json) {
    return UserObjectsMdParams.build(json);
}
exports.createUserObjectsMdParams = createUserObjectsMdParams;
/**
 * UserObjectsMdParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserObjectsMdParamsField = /** @class */ (function (_super) {
    __extends(UserObjectsMdParamsField, _super);
    function UserObjectsMdParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserObjectsMdParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        return _this;
    }
    return UserObjectsMdParamsField;
}(v4_1.ComplexTypeField));
exports.UserObjectsMdParamsField = UserObjectsMdParamsField;
var UserObjectsMdParams;
(function (UserObjectsMdParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); }
        });
    }
    UserObjectsMdParams.build = build;
})(UserObjectsMdParams = exports.UserObjectsMdParams || (exports.UserObjectsMdParams = {}));
//# sourceMappingURL=UserObjectsMdParams.js.map