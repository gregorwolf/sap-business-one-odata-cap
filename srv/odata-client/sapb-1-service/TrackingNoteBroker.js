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
exports.TrackingNoteBroker = exports.TrackingNoteBrokerField = exports.createTrackingNoteBroker = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TrackingNoteBroker.build]] instead.
 */
function createTrackingNoteBroker(json) {
    return TrackingNoteBroker.build(json);
}
exports.createTrackingNoteBroker = createTrackingNoteBroker;
/**
 * TrackingNoteBrokerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TrackingNoteBrokerField = /** @class */ (function (_super) {
    __extends(TrackingNoteBrokerField, _super);
    function TrackingNoteBrokerField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TrackingNoteBroker.trackingNoteNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteNumber = new v4_1.ComplexTypeNumberPropertyField('TrackingNoteNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[TrackingNoteBroker.trackingNoteLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteLineNumber = new v4_1.ComplexTypeNumberPropertyField('TrackingNoteLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[TrackingNoteBroker.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[TrackingNoteBroker.agreementNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementNumber = new v4_1.ComplexTypeNumberPropertyField('AgreementNumber', _this, 'Edm.Int32');
        return _this;
    }
    return TrackingNoteBrokerField;
}(v4_1.ComplexTypeField));
exports.TrackingNoteBrokerField = TrackingNoteBrokerField;
var TrackingNoteBroker;
(function (TrackingNoteBroker) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TrackingNoteNumber: function (trackingNoteNumber) { return ({ trackingNoteNumber: v4_1.edmToTs(trackingNoteNumber, 'Edm.Int32') }); },
            TrackingNoteLineNumber: function (trackingNoteLineNumber) { return ({ trackingNoteLineNumber: v4_1.edmToTs(trackingNoteLineNumber, 'Edm.Int32') }); },
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); },
            AgreementNumber: function (agreementNumber) { return ({ agreementNumber: v4_1.edmToTs(agreementNumber, 'Edm.Int32') }); }
        });
    }
    TrackingNoteBroker.build = build;
})(TrackingNoteBroker = exports.TrackingNoteBroker || (exports.TrackingNoteBroker = {}));
//# sourceMappingURL=TrackingNoteBroker.js.map