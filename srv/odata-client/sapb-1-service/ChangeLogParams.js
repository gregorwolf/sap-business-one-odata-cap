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
exports.ChangeLogParams = exports.ChangeLogParamsField = exports.createChangeLogParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ChangeLogParams.build]] instead.
 */
function createChangeLogParams(json) {
    return ChangeLogParams.build(json);
}
exports.createChangeLogParams = createChangeLogParams;
/**
 * ChangeLogParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ChangeLogParamsField = /** @class */ (function (_super) {
    __extends(ChangeLogParamsField, _super);
    /**
     * Creates an instance of ChangeLogParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ChangeLogParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ChangeLogParams) || this;
        /**
         * Representation of the [[ChangeLogParams.logInstance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logInstance = new core_1.ComplexTypeNumberPropertyField('LogInstance', _this, 'Edm.Int32');
        /**
         * Representation of the [[ChangeLogParams.updatedDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.updatedDate = new core_1.ComplexTypeDatePropertyField('UpdatedDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ChangeLogParams.userName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userName = new core_1.ComplexTypeStringPropertyField('UserName', _this, 'Edm.String');
        /**
         * Representation of the [[ChangeLogParams.objectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.objectCode = new core_1.ComplexTypeStringPropertyField('ObjectCode', _this, 'Edm.String');
        return _this;
    }
    return ChangeLogParamsField;
}(core_1.ComplexTypeField));
exports.ChangeLogParamsField = ChangeLogParamsField;
var ChangeLogParams;
(function (ChangeLogParams) {
    /**
     * Metadata information on all properties of the `ChangeLogParams` complex type.
     */
    ChangeLogParams._propertyMetadata = [{
            originalName: 'LogInstance',
            name: 'logInstance',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UpdatedDate',
            name: 'updatedDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'UserName',
            name: 'userName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ObjectCode',
            name: 'objectCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ChangeLogParams);
    }
    ChangeLogParams.build = build;
})(ChangeLogParams = exports.ChangeLogParams || (exports.ChangeLogParams = {}));
//# sourceMappingURL=ChangeLogParams.js.map