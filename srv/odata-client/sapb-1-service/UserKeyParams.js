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
exports.UserKeyParams = exports.UserKeyParamsField = exports.createUserKeyParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[UserKeyParams.build]] instead.
 */
function createUserKeyParams(json) {
    return UserKeyParams.build(json);
}
exports.createUserKeyParams = createUserKeyParams;
/**
 * UserKeyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserKeyParamsField = /** @class */ (function (_super) {
    __extends(UserKeyParamsField, _super);
    /**
     * Creates an instance of UserKeyParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserKeyParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UserKeyParams) || this;
        /**
         * Representation of the [[UserKeyParams.tableName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tableName = new core_1.ComplexTypeStringPropertyField('TableName', _this, 'Edm.String');
        /**
         * Representation of the [[UserKeyParams.keyIndex]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyIndex = new core_1.ComplexTypeNumberPropertyField('KeyIndex', _this, 'Edm.Int32');
        return _this;
    }
    return UserKeyParamsField;
}(core_1.ComplexTypeField));
exports.UserKeyParamsField = UserKeyParamsField;
var UserKeyParams;
(function (UserKeyParams) {
    /**
     * Metadata information on all properties of the `UserKeyParams` complex type.
     */
    UserKeyParams._propertyMetadata = [{
            originalName: 'TableName',
            name: 'tableName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'KeyIndex',
            name: 'keyIndex',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UserKeyParams);
    }
    UserKeyParams.build = build;
})(UserKeyParams = exports.UserKeyParams || (exports.UserKeyParams = {}));
//# sourceMappingURL=UserKeyParams.js.map