import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PosTotalizer
 */
export interface PosTotalizer {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Number.
     * @nullable
     */
    number?: number;
    /**
     * Total.
     * @nullable
     */
    total?: number;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PosTotalizer.build]] instead.
 */
export declare function createPosTotalizer(json: any): PosTotalizer;
/**
 * PosTotalizerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PosTotalizerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PosTotalizer.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PosTotalizer.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PosTotalizer.number]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    number: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PosTotalizer.total]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    total: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PosTotalizer.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace PosTotalizer {
    function build(json: {
        [keys: string]: FieldType;
    }): PosTotalizer;
}
//# sourceMappingURL=PosTotalizer.d.ts.map