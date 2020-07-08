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
exports.UserQueryParams = exports.UserQueryParamsField = exports.createUserQueryParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UserQueryParams.build]] instead.
 */
function createUserQueryParams(json) {
    return UserQueryParams.build(json);
}
exports.createUserQueryParams = createUserQueryParams;
/**
 * UserQueryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserQueryParamsField = /** @class */ (function (_super) {
    __extends(UserQueryParamsField, _super);
    function UserQueryParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserQueryParams.internalKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalKey = new v4_1.ComplexTypeNumberPropertyField('InternalKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserQueryParams.queryCategory]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.queryCategory = new v4_1.ComplexTypeNumberPropertyField('QueryCategory', _this, 'Edm.Int32');
        return _this;
    }
    return UserQueryParamsField;
}(v4_1.ComplexTypeField));
exports.UserQueryParamsField = UserQueryParamsField;
var UserQueryParams;
(function (UserQueryParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            InternalKey: function (internalKey) { return ({ internalKey: v4_1.edmToTs(internalKey, 'Edm.Int32') }); },
            QueryCategory: function (queryCategory) { return ({ queryCategory: v4_1.edmToTs(queryCategory, 'Edm.Int32') }); }
        });
    }
    UserQueryParams.build = build;
})(UserQueryParams = exports.UserQueryParams || (exports.UserQueryParams = {}));
//# sourceMappingURL=UserQueryParams.js.map