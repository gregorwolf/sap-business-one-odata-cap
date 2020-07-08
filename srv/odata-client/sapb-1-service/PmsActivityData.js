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
exports.PmsActivityData = exports.PmsActivityDataField = exports.createPmsActivityData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function PmsActivityDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmsActivityData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new v4_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsActivityData.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new v4_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsActivityData.activityId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activityId = new v4_1.ComplexTypeNumberPropertyField('ActivityID', _this, 'Edm.Int32');
        return _this;
    }
    return PmsActivityDataField;
}(v4_1.ComplexTypeField));
exports.PmsActivityDataField = PmsActivityDataField;
var PmsActivityData;
(function (PmsActivityData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineID: function (lineId) { return ({ lineId: v4_1.edmToTs(lineId, 'Edm.Int32') }); },
            StageID: function (stageId) { return ({ stageId: v4_1.edmToTs(stageId, 'Edm.Int32') }); },
            ActivityID: function (activityId) { return ({ activityId: v4_1.edmToTs(activityId, 'Edm.Int32') }); }
        });
    }
    PmsActivityData.build = build;
})(PmsActivityData = exports.PmsActivityData || (exports.PmsActivityData = {}));
//# sourceMappingURL=PmsActivityData.js.map