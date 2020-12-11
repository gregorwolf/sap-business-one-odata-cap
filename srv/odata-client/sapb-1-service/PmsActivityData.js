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
exports.PmsActivityData = exports.PmsActivityDataField = exports.createPmsActivityData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PmsActivityData.build]] instead.
 */
function createPmsActivityData(json) {
    return PmsActivityData.build(json);
}
exports.createPmsActivityData = createPmsActivityData;
/**
 * PmsActivityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmsActivityDataField = /** @class */ (function (_super) {
    __extends(PmsActivityDataField, _super);
    /**
     * Creates an instance of PmsActivityDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PmsActivityDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PmsActivityData) || this;
        /**
         * Representation of the [[PmsActivityData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new core_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsActivityData.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new core_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsActivityData.activityId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activityId = new core_1.ComplexTypeNumberPropertyField('ActivityID', _this, 'Edm.Int32');
        return _this;
    }
    return PmsActivityDataField;
}(core_1.ComplexTypeField));
exports.PmsActivityDataField = PmsActivityDataField;
var PmsActivityData;
(function (PmsActivityData) {
    /**
     * Metadata information on all properties of the `PmsActivityData` complex type.
     */
    PmsActivityData._propertyMetadata = [{
            originalName: 'LineID',
            name: 'lineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StageID',
            name: 'stageId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ActivityID',
            name: 'activityId',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PmsActivityData);
    }
    PmsActivityData.build = build;
})(PmsActivityData = exports.PmsActivityData || (exports.PmsActivityData = {}));
//# sourceMappingURL=PmsActivityData.js.map