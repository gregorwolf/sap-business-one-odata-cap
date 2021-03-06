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
exports.UserObjectMdFindColumn = exports.UserObjectMdFindColumnField = exports.createUserObjectMdFindColumn = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdFindColumn.build]] instead.
 */
function createUserObjectMdFindColumn(json) {
    return UserObjectMdFindColumn.build(json);
}
exports.createUserObjectMdFindColumn = createUserObjectMdFindColumn;
/**
 * UserObjectMdFindColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserObjectMdFindColumnField = /** @class */ (function (_super) {
    __extends(UserObjectMdFindColumnField, _super);
    /**
     * Creates an instance of UserObjectMdFindColumnField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserObjectMdFindColumnField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UserObjectMdFindColumn) || this;
        /**
         * Representation of the [[UserObjectMdFindColumn.columnNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnNumber = new core_1.ComplexTypeNumberPropertyField('ColumnNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserObjectMdFindColumn.columnAlias]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnAlias = new core_1.ComplexTypeStringPropertyField('ColumnAlias', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdFindColumn.columnDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnDescription = new core_1.ComplexTypeStringPropertyField('ColumnDescription', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdFindColumn.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        return _this;
    }
    return UserObjectMdFindColumnField;
}(core_1.ComplexTypeField));
exports.UserObjectMdFindColumnField = UserObjectMdFindColumnField;
var UserObjectMdFindColumn;
(function (UserObjectMdFindColumn) {
    /**
     * Metadata information on all properties of the `UserObjectMdFindColumn` complex type.
     */
    UserObjectMdFindColumn._propertyMetadata = [{
            originalName: 'ColumnNumber',
            name: 'columnNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ColumnAlias',
            name: 'columnAlias',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ColumnDescription',
            name: 'columnDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UserObjectMdFindColumn);
    }
    UserObjectMdFindColumn.build = build;
})(UserObjectMdFindColumn = exports.UserObjectMdFindColumn || (exports.UserObjectMdFindColumn = {}));
//# sourceMappingURL=UserObjectMdFindColumn.js.map