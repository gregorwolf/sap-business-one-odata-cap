"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of UserQueryParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserQueryParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UserQueryParams) || this;
        /**
         * Representation of the [[UserQueryParams.internalKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalKey = new core_1.ComplexTypeNumberPropertyField('InternalKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserQueryParams.queryCategory]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.queryCategory = new core_1.ComplexTypeNumberPropertyField('QueryCategory', _this, 'Edm.Int32');
        return _this;
    }
    return UserQueryParamsField;
}(core_1.ComplexTypeField));
exports.UserQueryParamsField = UserQueryParamsField;
var UserQueryParams;
(function (UserQueryParams) {
    /**
     * Metadata information on all properties of the `UserQueryParams` complex type.
     */
    UserQueryParams._propertyMetadata = [{
            originalName: 'InternalKey',
            name: 'internalKey',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'QueryCategory',
            name: 'queryCategory',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UserQueryParams);
    }
    UserQueryParams.build = build;
})(UserQueryParams = exports.UserQueryParams || (exports.UserQueryParams = {}));
//# sourceMappingURL=UserQueryParams.js.map