import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SnbLines
 */
export interface SnbLines {
    /**
     * Snb Abs Entry.
     * @nullable
     */
    snbAbsEntry?: number;
    /**
     * New Cost.
     * @nullable
     */
    newCost?: number;
    /**
     * Debit Credit.
     * @nullable
     */
    debitCredit?: number;
    /**
     * System Number.
     * @nullable
     */
    systemNumber?: number;
    /**
     * Lot Number.
     * @nullable
     */
    lotNumber?: string;
    /**
     * Manufacture Number.
     * @nullable
     */
    manufactureNumber?: string;
    /**
     * Admission Date.
     * @nullable
     */
    admissionDate?: Moment;
    /**
     * Expiration Date.
     * @nullable
     */
    expirationDate?: Moment;
    /**
     * Base Line.
     * @nullable
     */
    baseLine?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SnbLines.build]] instead.
 */
export declare function createSnbLines(json: any): SnbLines;
/**
 * SnbLinesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SnbLinesField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SnbLines.snbAbsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    snbAbsEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SnbLines.newCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    newCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SnbLines.debitCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    debitCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SnbLines.systemNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SnbLines.lotNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lotNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SnbLines.manufactureNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufactureNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SnbLines.admissionDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    admissionDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[SnbLines.expirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expirationDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[SnbLines.baseLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLine: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace SnbLines {
    function build(json: {
        [keys: string]: FieldType;
    }): SnbLines;
}
//# sourceMappingURL=SnbLines.d.ts.map