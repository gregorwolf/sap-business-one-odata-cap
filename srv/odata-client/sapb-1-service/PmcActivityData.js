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
exports.PmcActivityData = exports.PmcActivityDataField = exports.createPmcActivityData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PmcActivityData.build]] instead.
 */
function createPmcActivityData(json) {
    return PmcActivityData.build(json);
}
exports.createPmcActivityData = createPmcActivityData;
/**
 * PmcActivityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmcActivityDataField = /** @class */ (function (_super) {
    __extends(PmcActivityDataField, _super);
    function PmcActivityDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmcActivityData.activityId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activityId = new v4_1.ComplexTypeNumberPropertyField('ActivityID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmcActivityData.activityType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activityType = new v4_1.ComplexTypeStringPropertyField('ActivityType', _this, 'Edm.String');
        /**
         * Representation of the [[PmcActivityData.laborItem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.laborItem = new v4_1.ComplexTypeStringPropertyField('LaborItem', _this, 'Edm.String');
        return _this;
    }
    return PmcActivityDataField;
}(v4_1.ComplexTypeField));
exports.PmcActivityDataField = PmcActivityDataField;
var PmcActivityData;
(function (PmcActivityData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ActivityID: function (activityId) { return ({ activityId: v4_1.edmToTs(activityId, 'Edm.Int32') }); },
            ActivityType: function (activityType) { return ({ activityType: v4_1.edmToTs(activityType, 'Edm.String') }); },
            LaborItem: function (laborItem) { return ({ laborItem: v4_1.edmToTs(laborItem, 'Edm.String') }); }
        });
    }
    PmcActivityData.build = build;
})(PmcActivityData = exports.PmcActivityData || (exports.PmcActivityData = {}));
//# sourceMappingURL=PmcActivityData.js.map