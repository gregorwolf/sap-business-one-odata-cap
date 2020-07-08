import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * JournalEntryParams
 */
export interface JournalEntryParams {
    /**
     * Jdt Num.
     * @nullable
     */
    jdtNum?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[JournalEntryParams.build]] instead.
 */
export declare function createJournalEntryParams(json: any): JournalEntryParams;
/**
 * JournalEntryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class JournalEntryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[JournalEntryParams.jdtNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    jdtNum: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace JournalEntryParams {
    function build(json: {
        [keys: string]: FieldType;
    }): JournalEntryParams;
}
//# sourceMappingURL=JournalEntryParams.d.ts.map