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
exports.ChangeLogDifferenceParams = exports.ChangeLogDifferenceParamsField = exports.createChangeLogDifferenceParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ChangeLogDifferenceParams.build]] instead.
 */
function createChangeLogDifferenceParams(json) {
    return ChangeLogDifferenceParams.build(json);
}
exports.createChangeLogDifferenceParams = createChangeLogDifferenceParams;
/**
 * ChangeLogDifferenceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ChangeLogDifferenceParamsField = /** @class */ (function (_super) {
    __extends(ChangeLogDifferenceParamsField, _super);
    /**
     * Creates an instance of ChangeLogDifferenceParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ChangeLogDifferenceParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ChangeLogDifferenceParams) || this;
        /**
         * Representation of the [[ChangeLogDifferenceParams.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new core_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ChangeLogDifferenceParams.changedField]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changedField = new core_1.ComplexTypeStringPropertyField('ChangedField', _this, 'Edm.String');
        /**
         * Representation of the [[ChangeLogDifferenceParams.oldValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.oldValue = new core_1.ComplexTypeStringPropertyField('OldValue', _this, 'Edm.String');
        /**
         * Representation of the [[ChangeLogDifferenceParams.newValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.newValue = new core_1.ComplexTypeStringPropertyField('NewValue', _this, 'Edm.String');
        /**
         * Representation of the [[ChangeLogDifferenceParams.userName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userName = new core_1.ComplexTypeStringPropertyField('UserName', _this, 'Edm.String');
        /**
         * Representation of the [[ChangeLogDifferenceParams.arrayOffset]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arrayOffset = new core_1.ComplexTypeNumberPropertyField('ArrayOffset', _this, 'Edm.Int32');
        /**
         * Representation of the [[ChangeLogDifferenceParams.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeStringPropertyField('LineNumber', _this, 'Edm.String');
        return _this;
    }
    return ChangeLogDifferenceParamsField;
}(core_1.ComplexTypeField));
exports.ChangeLogDifferenceParamsField = ChangeLogDifferenceParamsField;
var ChangeLogDifferenceParams;
(function (ChangeLogDifferenceParams) {
    /**
     * Metadata information on all properties of the `ChangeLogDifferenceParams` complex type.
     */
    ChangeLogDifferenceParams._propertyMetadata = [{
            originalName: 'Date',
            name: 'date',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ChangedField',
            name: 'changedField',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'OldValue',
            name: 'oldValue',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'NewValue',
            name: 'newValue',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UserName',
            name: 'userName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ArrayOffset',
            name: 'arrayOffset',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ChangeLogDifferenceParams);
    }
    ChangeLogDifferenceParams.build = build;
})(ChangeLogDifferenceParams = exports.ChangeLogDifferenceParams || (exports.ChangeLogDifferenceParams = {}));
//# sourceMappingURL=ChangeLogDifferenceParams.js.map