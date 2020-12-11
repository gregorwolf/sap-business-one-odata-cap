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
exports.ApprovalRequestLine = exports.ApprovalRequestLineField = exports.createApprovalRequestLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ApprovalRequestLine.build]] instead.
 */
function createApprovalRequestLine(json) {
    return ApprovalRequestLine.build(json);
}
exports.createApprovalRequestLine = createApprovalRequestLine;
/**
 * ApprovalRequestLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ApprovalRequestLineField = /** @class */ (function (_super) {
    __extends(ApprovalRequestLineField, _super);
    /**
     * Creates an instance of ApprovalRequestLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ApprovalRequestLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ApprovalRequestLine) || this;
        /**
         * Representation of the [[ApprovalRequestLine.stageCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageCode = new core_1.ComplexTypeNumberPropertyField('StageCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ApprovalRequestLine.userId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userId = new core_1.ComplexTypeNumberPropertyField('UserID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ApprovalRequestLine.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        /**
         * Representation of the [[ApprovalRequestLine.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[ApprovalRequestLine.updateDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.updateDate = new core_1.ComplexTypeDatePropertyField('UpdateDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ApprovalRequestLine.updateTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.updateTime = new core_1.ComplexTypeTimePropertyField('UpdateTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[ApprovalRequestLine.creationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationDate = new core_1.ComplexTypeDatePropertyField('CreationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ApprovalRequestLine.creationTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationTime = new core_1.ComplexTypeTimePropertyField('CreationTime', _this, 'Edm.TimeOfDay');
        return _this;
    }
    return ApprovalRequestLineField;
}(core_1.ComplexTypeField));
exports.ApprovalRequestLineField = ApprovalRequestLineField;
var ApprovalRequestLine;
(function (ApprovalRequestLine) {
    /**
     * Metadata information on all properties of the `ApprovalRequestLine` complex type.
     */
    ApprovalRequestLine._propertyMetadata = [{
            originalName: 'StageCode',
            name: 'stageCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UserID',
            name: 'userId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Status',
            name: 'status',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UpdateDate',
            name: 'updateDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'UpdateTime',
            name: 'updateTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'CreationDate',
            name: 'creationDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'CreationTime',
            name: 'creationTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ApprovalRequestLine);
    }
    ApprovalRequestLine.build = build;
})(ApprovalRequestLine = exports.ApprovalRequestLine || (exports.ApprovalRequestLine = {}));
//# sourceMappingURL=ApprovalRequestLine.js.map