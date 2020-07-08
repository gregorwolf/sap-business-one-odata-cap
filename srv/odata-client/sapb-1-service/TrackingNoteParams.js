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
exports.TrackingNoteParams = exports.TrackingNoteParamsField = exports.createTrackingNoteParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TrackingNoteParams.build]] instead.
 */
function createTrackingNoteParams(json) {
    return TrackingNoteParams.build(json);
}
exports.createTrackingNoteParams = createTrackingNoteParams;
/**
 * TrackingNoteParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TrackingNoteParamsField = /** @class */ (function (_super) {
    __extends(TrackingNoteParamsField, _super);
    function TrackingNoteParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TrackingNoteParams.trackingNoteNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteNumber = new v4_1.ComplexTypeNumberPropertyField('TrackingNoteNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[TrackingNoteParams.ccdNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ccdNumber = new v4_1.ComplexTypeStringPropertyField('CCDNumber', _this, 'Edm.String');
        return _this;
    }
    return TrackingNoteParamsField;
}(v4_1.ComplexTypeField));
exports.TrackingNoteParamsField = TrackingNoteParamsField;
var TrackingNoteParams;
(function (TrackingNoteParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TrackingNoteNumber: function (trackingNoteNumber) { return ({ trackingNoteNumber: v4_1.edmToTs(trackingNoteNumber, 'Edm.Int32') }); },
            CCDNumber: function (ccdNumber) { return ({ ccdNumber: v4_1.edmToTs(ccdNumber, 'Edm.String') }); }
        });
    }
    TrackingNoteParams.build = build;
})(TrackingNoteParams = exports.TrackingNoteParams || (exports.TrackingNoteParams = {}));
//# sourceMappingURL=TrackingNoteParams.js.map