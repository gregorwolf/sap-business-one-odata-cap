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
exports.PmcStageTypeData = exports.PmcStageTypeDataField = exports.createPmcStageTypeData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function PmcStageTypeDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmcStageTypeData.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new v4_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmcStageTypeData.stageName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageName = new v4_1.ComplexTypeStringPropertyField('StageName', _this, 'Edm.String');
        /**
         * Representation of the [[PmcStageTypeData.stageDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageDescription = new v4_1.ComplexTypeStringPropertyField('StageDescription', _this, 'Edm.String');
        return _this;
    }
    return PmcStageTypeDataField;
}(v4_1.ComplexTypeField));
exports.PmcStageTypeDataField = PmcStageTypeDataField;
var PmcStageTypeData;
(function (PmcStageTypeData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            StageID: function (stageId) { return ({ stageId: v4_1.edmToTs(stageId, 'Edm.Int32') }); },
            StageName: function (stageName) { return ({ stageName: v4_1.edmToTs(stageName, 'Edm.String') }); },
            StageDescription: function (stageDescription) { return ({ stageDescription: v4_1.edmToTs(stageDescription, 'Edm.String') }); }
        });
    }
    PmcStageTypeData.build = build;
})(PmcStageTypeData = exports.PmcStageTypeData || (exports.PmcStageTypeData = {}));
//# sourceMappingURL=PmcStageTypeData.js.map