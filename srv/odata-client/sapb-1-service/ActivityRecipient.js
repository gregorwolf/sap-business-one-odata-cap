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
exports.ActivityRecipient = exports.ActivityRecipientField = exports.createActivityRecipient = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ActivityRecipient.build]] instead.
 */
function createActivityRecipient(json) {
    return ActivityRecipient.build(json);
}
exports.createActivityRecipient = createActivityRecipient;
/**
 * ActivityRecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ActivityRecipientField = /** @class */ (function (_super) {
    __extends(ActivityRecipientField, _super);
    function ActivityRecipientField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ActivityRecipient.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ActivityRecipient.recipientCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.recipientCode = new v4_1.ComplexTypeStringPropertyField('RecipientCode', _this, 'Edm.String');
        return _this;
    }
    return ActivityRecipientField;
}(v4_1.ComplexTypeField));
exports.ActivityRecipientField = ActivityRecipientField;
var ActivityRecipient;
(function (ActivityRecipient) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            RecipientCode: function (recipientCode) { return ({ recipientCode: v4_1.edmToTs(recipientCode, 'Edm.String') }); }
        });
    }
    ActivityRecipient.build = build;
})(ActivityRecipient = exports.ActivityRecipient || (exports.ActivityRecipient = {}));
//# sourceMappingURL=ActivityRecipient.js.map