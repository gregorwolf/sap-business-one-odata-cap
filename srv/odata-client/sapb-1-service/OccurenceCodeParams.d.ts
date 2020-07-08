import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * OccurenceCodeParams
 */
export interface OccurenceCodeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Note.
     * @nullable
     */
    note?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[OccurenceCodeParams.build]] instead.
 */
export declare function createOccurenceCodeParams(json: any): OccurenceCodeParams;
/**
 * OccurenceCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class OccurenceCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[OccurenceCodeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[OccurenceCodeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[OccurenceCodeParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[OccurenceCodeParams.note]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    note: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace OccurenceCodeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): OccurenceCodeParams;
}
//# sourceMappingURL=OccurenceCodeParams.d.ts.map