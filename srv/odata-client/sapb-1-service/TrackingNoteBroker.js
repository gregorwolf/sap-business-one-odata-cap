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
exports.TrackingNoteBroker = exports.TrackingNoteBrokerField = exports.createTrackingNoteBroker = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of TrackingNoteBrokerField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TrackingNoteBrokerField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TrackingNoteBroker) || this;
        /**
         * Representation of the [[TrackingNoteBroker.trackingNoteNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteNumber = new core_1.ComplexTypeNumberPropertyField('TrackingNoteNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[TrackingNoteBroker.trackingNoteLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trackingNoteLineNumber = new core_1.ComplexTypeNumberPropertyField('TrackingNoteLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[TrackingNoteBroker.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[TrackingNoteBroker.agreementNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementNumber = new core_1.ComplexTypeNumberPropertyField('AgreementNumber', _this, 'Edm.Int32');
        return _this;
    }
    return TrackingNoteBrokerField;
}(core_1.ComplexTypeField));
exports.TrackingNoteBrokerField = TrackingNoteBrokerField;
var TrackingNoteBroker;
(function (TrackingNoteBroker) {
    /**
     * Metadata information on all properties of the `TrackingNoteBroker` complex type.
     */
    TrackingNoteBroker._propertyMetadata = [{
            originalName: 'TrackingNoteNumber',
            name: 'trackingNoteNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TrackingNoteLineNumber',
            name: 'trackingNoteLineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BPCode',
            name: 'bpCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AgreementNumber',
            name: 'agreementNumber',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TrackingNoteBroker);
    }
    TrackingNoteBroker.build = build;
})(TrackingNoteBroker = exports.TrackingNoteBroker || (exports.TrackingNoteBroker = {}));
//# sourceMappingURL=TrackingNoteBroker.js.map