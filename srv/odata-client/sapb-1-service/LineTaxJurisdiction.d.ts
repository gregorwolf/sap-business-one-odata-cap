import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * LineTaxJurisdiction
 */
export interface LineTaxJurisdiction {
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
 * @deprecated Since v1.6.0. Use [[LineTaxJurisdiction.build]] instead.
 */
export declare function createLineTaxJurisdiction(json: any): LineTaxJurisdiction;
/**
 * LineTaxJurisdictionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LineTaxJurisdictionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[LineTaxJurisdiction.jurisdictionCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    jurisdictionCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LineTaxJurisdiction.jurisdictionType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    jurisdictionType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LineTaxJurisdiction.taxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LineTaxJurisdiction.taxAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxAmountSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LineTaxJurisdiction.taxAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LineTaxJurisdiction.taxRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LineTaxJurisdiction.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LineTaxJurisdiction.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LineTaxJurisdiction.rowSequence]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowSequence: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace LineTaxJurisdiction {
    function build(json: {
        [keys: string]: FieldType;
    }): LineTaxJurisdiction;
}
//# sourceMappingURL=LineTaxJurisdiction.d.ts.map