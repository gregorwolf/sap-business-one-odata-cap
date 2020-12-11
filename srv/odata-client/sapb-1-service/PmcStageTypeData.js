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
exports.PmcStageTypeData = exports.PmcStageTypeDataField = exports.createPmcStageTypeData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PmcStageTypeData.build]] instead.
 */
function createPmcStageTypeData(json) {
    return PmcStageTypeData.build(json);
}
exports.createPmcStageTypeData = createPmcStageTypeData;
/**
 * PmcStageTypeDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmcStageTypeDataField = /** @class */ (function (_super) {
    __extends(PmcStageTypeDataField, _super);
    /**
     * Creates an instance of PmcStageTypeDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PmcStageTypeDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PmcStageTypeData) || this;
        /**
         * Representation of the [[PmcStageTypeData.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new core_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmcStageTypeData.stageName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageName = new core_1.ComplexTypeStringPropertyField('StageName', _this, 'Edm.String');
        /**
         * Representation of the [[PmcStageTypeData.stageDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageDescription = new core_1.ComplexTypeStringPropertyField('StageDescription', _this, 'Edm.String');
        return _this;
    }
    return PmcStageTypeDataField;
}(core_1.ComplexTypeField));
exports.PmcStageTypeDataField = PmcStageTypeDataField;
var PmcStageTypeData;
(function (PmcStageTypeData) {
    /**
     * Metadata information on all properties of the `PmcStageTypeData` complex type.
     */
    PmcStageTypeData._propertyMetadata = [{
            originalName: 'StageID',
            name: 'stageId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StageName',
            name: 'stageName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StageDescription',
            name: 'stageDescription',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PmcStageTypeData);
    }
    PmcStageTypeData.build = build;
})(PmcStageTypeData = exports.PmcStageTypeData || (exports.PmcStageTypeData = {}));
//# sourceMappingURL=PmcStageTypeData.js.map