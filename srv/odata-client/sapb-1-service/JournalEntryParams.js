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
exports.JournalEntryParams = exports.JournalEntryParamsField = exports.createJournalEntryParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[JournalEntryParams.build]] instead.
 */
function createJournalEntryParams(json) {
    return JournalEntryParams.build(json);
}
exports.createJournalEntryParams = createJournalEntryParams;
/**
 * JournalEntryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var JournalEntryParamsField = /** @class */ (function (_super) {
    __extends(JournalEntryParamsField, _super);
    function JournalEntryParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[JournalEntryParams.jdtNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.jdtNum = new v4_1.ComplexTypeNumberPropertyField('JdtNum', _this, 'Edm.Int32');
        return _this;
    }
    return JournalEntryParamsField;
}(v4_1.ComplexTypeField));
exports.JournalEntryParamsField = JournalEntryParamsField;
var JournalEntryParams;
(function (JournalEntryParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            JdtNum: function (jdtNum) { return ({ jdtNum: v4_1.edmToTs(jdtNum, 'Edm.Int32') }); }
        });
    }
    JournalEntryParams.build = build;
})(JournalEntryParams = exports.JournalEntryParams || (exports.JournalEntryParams = {}));
//# sourceMappingURL=JournalEntryParams.js.map