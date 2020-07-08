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
exports.Attachments2Params = exports.Attachments2ParamsField = exports.createAttachments2Params = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[Attachments2Params.build]] instead.
 */
function createAttachments2Params(json) {
    return Attachments2Params.build(json);
}
exports.createAttachments2Params = createAttachments2Params;
/**
 * Attachments2ParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var Attachments2ParamsField = /** @class */ (function (_super) {
    __extends(Attachments2ParamsField, _super);
    function Attachments2ParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Attachments2Params.absoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absoluteEntry = new v4_1.ComplexTypeNumberPropertyField('AbsoluteEntry', _this, 'Edm.Int32');
        return _this;
    }
    return Attachments2ParamsField;
}(v4_1.ComplexTypeField));
exports.Attachments2ParamsField = Attachments2ParamsField;
var Attachments2Params;
(function (Attachments2Params) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsoluteEntry: function (absoluteEntry) { return ({ absoluteEntry: v4_1.edmToTs(absoluteEntry, 'Edm.Int32') }); }
        });
    }
    Attachments2Params.build = build;
})(Attachments2Params = exports.Attachments2Params || (exports.Attachments2Params = {}));
//# sourceMappingURL=Attachments2Params.js.map