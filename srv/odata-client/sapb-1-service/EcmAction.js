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
exports.EcmAction = exports.EcmActionField = exports.createEcmAction = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function EcmActionField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EcmAction.actionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionId = new v4_1.ComplexTypeNumberPropertyField('ActionID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.protocol]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.protocol = new v4_1.ComplexTypeStringPropertyField('Protocol', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new v4_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.message]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.message = new v4_1.ComplexTypeStringPropertyField('Message', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.environment]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.environment = new v4_1.ComplexTypeNumberPropertyField('Environment', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.businessPlace]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.businessPlace = new v4_1.ComplexTypeNumberPropertyField('BusinessPlace', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.submits]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.submits = new v4_1.ComplexTypeNumberPropertyField('Submits', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.objectId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.objectId = new v4_1.ComplexTypeStringPropertyField('ObjectID', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.reportId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportId = new v4_1.ComplexTypeStringPropertyField('ReportID', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.sourceType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceType = new v4_1.ComplexTypeStringPropertyField('SourceType', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.sourceObject]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceObject = new v4_1.ComplexTypeNumberPropertyField('SourceObject', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.assignedId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.assignedId = new v4_1.ComplexTypeStringPropertyField('AssignedID', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.documentBatch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentBatch = new v4_1.ComplexTypeStringPropertyField('DocumentBatch', _this, 'Edm.String');
        /**
         * Representation of the [[EcmAction.documentBatchLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentBatchLine = new v4_1.ComplexTypeNumberPropertyField('DocumentBatchLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.periodNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodNumber = new v4_1.ComplexTypeNumberPropertyField('PeriodNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.periodYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodYear = new v4_1.ComplexTypeNumberPropertyField('PeriodYear', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmAction.periodDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodDateFrom = new v4_1.ComplexTypeDatePropertyField('PeriodDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EcmAction.periodDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodDateTo = new v4_1.ComplexTypeDatePropertyField('PeriodDateTo', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return EcmActionField;
}(v4_1.ComplexTypeField));
exports.EcmActionField = EcmActionField;
var EcmAction;
(function (EcmAction) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ActionID: function (actionId) { return ({ actionId: v4_1.edmToTs(actionId, 'Edm.Int32') }); },
            Protocol: function (protocol) { return ({ protocol: v4_1.edmToTs(protocol, 'Edm.String') }); },
            Description: function (description) { return ({ description: v4_1.edmToTs(description, 'Edm.String') }); },
            Message: function (message) { return ({ message: v4_1.edmToTs(message, 'Edm.String') }); },
            Environment: function (environment) { return ({ environment: v4_1.edmToTs(environment, 'Edm.Int32') }); },
            BusinessPlace: function (businessPlace) { return ({ businessPlace: v4_1.edmToTs(businessPlace, 'Edm.Int32') }); },
            Submits: function (submits) { return ({ submits: v4_1.edmToTs(submits, 'Edm.Int32') }); },
            ObjectID: function (objectId) { return ({ objectId: v4_1.edmToTs(objectId, 'Edm.String') }); },
            ReportID: function (reportId) { return ({ reportId: v4_1.edmToTs(reportId, 'Edm.String') }); },
            SourceType: function (sourceType) { return ({ sourceType: v4_1.edmToTs(sourceType, 'Edm.String') }); },
            SourceObject: function (sourceObject) { return ({ sourceObject: v4_1.edmToTs(sourceObject, 'Edm.Int32') }); },
            AssignedID: function (assignedId) { return ({ assignedId: v4_1.edmToTs(assignedId, 'Edm.String') }); },
            DocumentBatch: function (documentBatch) { return ({ documentBatch: v4_1.edmToTs(documentBatch, 'Edm.String') }); },
            DocumentBatchLine: function (documentBatchLine) { return ({ documentBatchLine: v4_1.edmToTs(documentBatchLine, 'Edm.Int32') }); },
            PeriodNumber: function (periodNumber) { return ({ periodNumber: v4_1.edmToTs(periodNumber, 'Edm.Int32') }); },
            PeriodYear: function (periodYear) { return ({ periodYear: v4_1.edmToTs(periodYear, 'Edm.Int32') }); },
            PeriodDateFrom: function (periodDateFrom) { return ({ periodDateFrom: v4_1.edmToTs(periodDateFrom, 'Edm.DateTimeOffset') }); },
            PeriodDateTo: function (periodDateTo) { return ({ periodDateTo: v4_1.edmToTs(periodDateTo, 'Edm.DateTimeOffset') }); }
        });
    }
    EcmAction.build = build;
})(EcmAction = exports.EcmAction || (exports.EcmAction = {}));
//# sourceMappingURL=EcmAction.js.map