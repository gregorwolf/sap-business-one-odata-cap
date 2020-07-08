import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ChooseFromListLine
 */
export interface ChooseFromListLine {
    /**
     * Field No.
     * @nullable
     */
    fieldNo?: string;
    /**
     * Displayed Name.
     * @nullable
     */
    displayedName?: string;
    /**
     * Visual Index.
     * @nullable
     */
    visualIndex?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ChooseFromListLine.build]] instead.
 */
export declare function createChooseFromListLine(json: any): ChooseFromListLine;
/**
 * ChooseFromListLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ChooseFromListLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ChooseFromListLine.fieldNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChooseFromListLine.displayedName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayedName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChooseFromListLine.visualIndex]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    visualIndex: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ChooseFromListLine {
    function build(json: {
        [keys: string]: FieldType;
    }): ChooseFromListLine;
}
//# sourceMappingURL=ChooseFromListLine.d.ts.map