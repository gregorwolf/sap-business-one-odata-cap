import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ChecksforPaymentLine
 */
export interface ChecksforPaymentLine {
    /**
     * Row Number.
     * @nullable
     */
    rowNumber?: number;
    /**
     * Row Details.
     * @nullable
     */
    rowDetails?: string;
    /**
     * Row Total.
     * @nullable
     */
    rowTotal?: number;
    /**
     * Row Currency.
     * @nullable
     */
    rowCurrency?: string;
    /**
     * Tax Definition.
     * @nullable
     */
    taxDefinition?: string;
    /**
     * Tax Percent.
     * @nullable
     */
    taxPercent?: number;
    /**
     * Credited Account.
     * @nullable
     */
    creditedAccount?: string;
    /**
     * Line Total.
     * @nullable
     */
    lineTotal?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ChecksforPaymentLine.build]] instead.
 */
export declare function createChecksforPaymentLine(json: any): ChecksforPaymentLine;
/**
 * ChecksforPaymentLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ChecksforPaymentLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ChecksforPaymentLine.rowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ChecksforPaymentLine.rowDetails]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowDetails: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChecksforPaymentLine.rowTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ChecksforPaymentLine.rowCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowCurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChecksforPaymentLine.taxDefinition]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxDefinition: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChecksforPaymentLine.taxPercent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxPercent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ChecksforPaymentLine.creditedAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditedAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChecksforPaymentLine.lineTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineTotal: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ChecksforPaymentLine {
    function build(json: {
        [keys: string]: FieldType;
    }): ChecksforPaymentLine;
}
//# sourceMappingURL=ChecksforPaymentLine.d.ts.map