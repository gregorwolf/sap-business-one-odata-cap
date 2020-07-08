import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ShowDifferenceParams
 */
export interface ShowDifferenceParams {
    /**
     * Primary Key.
     * @nullable
     */
    primaryKey?: string;
    /**
     * Udo Object Code.
     * @nullable
     */
    udoObjectCode?: string;
    /**
     * Log Instance 2.
     * @nullable
     */
    logInstance2?: number;
    /**
     * Log Instance.
     * @nullable
     */
    logInstance?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ShowDifferenceParams.build]] instead.
 */
export declare function createShowDifferenceParams(json: any): ShowDifferenceParams;
/**
 * ShowDifferenceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ShowDifferenceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ShowDifferenceParams.primaryKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    primaryKey: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ShowDifferenceParams.udoObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udoObjectCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ShowDifferenceParams.logInstance2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    logInstance2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ShowDifferenceParams.logInstance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    logInstance: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ShowDifferenceParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ShowDifferenceParams;
}
//# sourceMappingURL=ShowDifferenceParams.d.ts.map