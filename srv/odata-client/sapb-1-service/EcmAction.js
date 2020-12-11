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
exports.EcmAction = exports.EcmActionField = exports.createEcmAction = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[EcmAction.build]] instead.
 */
function createEcmAction(json) {
    return EcmAction.build(json);
}
exports.createEcmAction = createEcmAction;
/**
 * EcmActionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EcmActionField = /** @class */ (function (_super) {
    __extends(EcmActionField, _super);
    /**
     * Creates an instance of EcmActionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EcmActionField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EcmAction) || this;
        /**
         * Representation of the [[EcmAction.actionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionId = new core_1.ComplexTypeNumberPropertyField('ActionID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.protocol]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.protocol = new core_1.ComplexTypeStringPropertyField('Protocol', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeEnumPropertyField('Type', _this);
        /**
         * Representation of the [[EcmAction.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new core_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        /**
         * Representation of the [[EcmAction.message]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.message = new core_1.ComplexTypeStringPropertyField('Message', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.environment]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.environment = new core_1.ComplexTypeNumberPropertyField('Environment', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.businessPlace]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.businessPlace = new core_1.ComplexTypeNumberPropertyField('BusinessPlace', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.submits]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.submits = new core_1.ComplexTypeNumberPropertyField('Submits', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.objectId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.objectId = new core_1.ComplexTypeStringPropertyField('ObjectID', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.reportId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportId = new core_1.ComplexTypeStringPropertyField('ReportID', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.sourceType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceType = new core_1.ComplexTypeStringPropertyField('SourceType', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.sourceObject]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceObject = new core_1.ComplexTypeNumberPropertyField('SourceObject', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.assignedId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.assignedId = new core_1.ComplexTypeStringPropertyField('AssignedID', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.documentBatch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentBatch = new core_1.ComplexTypeStringPropertyField('DocumentBatch', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.documentBatchLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentBatchLine = new core_1.ComplexTypeNumberPropertyField('DocumentBatchLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.periodType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodType = new core_1.ComplexTypeEnumPropertyField('PeriodType', _this);
        /**
         * Representation of the [[EcmAction.periodNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodNumber = new core_1.ComplexTypeNumberPropertyField('PeriodNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.periodYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodYear = new core_1.ComplexTypeNumberPropertyField('PeriodYear', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.periodDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodDateFrom = new core_1.ComplexTypeDatePropertyField('PeriodDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EcmAction.periodDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodDateTo = new core_1.ComplexTypeDatePropertyField('PeriodDateTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EcmAction.isRemoved]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isRemoved = new core_1.ComplexTypeEnumPropertyField('IsRemoved', _this);
        /**
         * Representation of the [[EcmAction.isCanceled]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isCanceled = new core_1.ComplexTypeEnumPropertyField('IsCanceled', _this);
        /**
         * Representation of the [[EcmAction.generationType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.generationType = new core_1.ComplexTypeEnumPropertyField('GenerationType', _this);
        return _this;
    }
    return EcmActionField;
}(core_1.ComplexTypeField));
exports.EcmActionField = EcmActionField;
var EcmAction;
(function (EcmAction) {
    /**
     * Metadata information on all properties of the `EcmAction` complex type.
     */
    EcmAction._propertyMetadata = [{
            originalName: 'ActionID',
            name: 'actionId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Protocol',
            name: 'protocol',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Description',
            name: 'description',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Status',
            name: 'status',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Message',
            name: 'message',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Environment',
            name: 'environment',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BusinessPlace',
            name: 'businessPlace',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Submits',
            name: 'submits',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ObjectID',
            name: 'objectId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ReportID',
            name: 'reportId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SourceType',
            name: 'sourceType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SourceObject',
            name: 'sourceObject',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AssignedID',
            name: 'assignedId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocumentBatch',
            name: 'documentBatch',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocumentBatchLine',
            name: 'documentBatchLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PeriodType',
            name: 'periodType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PeriodNumber',
            name: 'periodNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PeriodYear',
            name: 'periodYear',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PeriodDateFrom',
            name: 'periodDateFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'PeriodDateTo',
            name: 'periodDateTo',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'IsRemoved',
            name: 'isRemoved',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'IsCanceled',
            name: 'isCanceled',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'GenerationType',
            name: 'generationType',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, EcmAction);
    }
    EcmAction.build = build;
})(EcmAction = exports.EcmAction || (exports.EcmAction = {}));
//# sourceMappingURL=EcmAction.js.map