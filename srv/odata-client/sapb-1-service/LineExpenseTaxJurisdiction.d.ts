import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * LineExpenseTaxJurisdiction
 */
export interface LineExpenseTaxJurisdiction {
    /**
     * Jurisdiction Code.
     * @nullable
     */
    jurisdictionCode?: string;
    /**
     * Jurisdiction Type.
     * @nullable
     */
    jurisdictionType?: number;
    /**
     * Tax Amount.
     * @nullable
     */
    taxAmount?: number;
    /**
     * Tax Amount Sc.
     * @nullable
     */
    taxAmountSc?: number;
    /**
     * Tax Amount Fc.
     * @nullable
     */
    taxAmountFc?: number;
    /**
     * Tax Rate.
     * @nullable
     */
    taxRate?: number;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Row Sequence.
     * @nullable
     */
    rowSequence?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[LineExpenseTaxJurisdiction.build]] instead.
 */
export declare function createLineExpenseTaxJurisdiction(json: any): LineExpenseTaxJurisdiction;
/**
 * LineExpenseTaxJurisdictionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LineExpenseTaxJurisdictionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[LineExpenseTaxJurisdiction.jurisdictionCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    jurisdictionCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LineExpenseTaxJurisdiction.jurisdictionType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    jurisdictionType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LineExpenseTaxJurisdiction.taxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LineExpenseTaxJurisdiction.taxAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxAmountSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LineExpenseTaxJurisdiction.taxAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LineExpenseTaxJurisdiction.taxRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LineExpenseTaxJurisdiction.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LineExpenseTaxJurisdiction.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LineExpenseTaxJurisdiction.rowSequence]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowSequence: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace LineExpenseTaxJurisdiction {
    function build(json: {
        [keys: string]: FieldType;
    }): LineExpenseTaxJurisdiction;
}
//# sourceMappingURL=LineExpenseTaxJurisdiction.d.ts.map