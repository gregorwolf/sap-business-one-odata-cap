import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time } from '@sap-cloud-sdk/core';
/**
 * CycleCountDeterminationSetup
 */
export interface CycleCountDeterminationSetup {
    /**
     * Warehouse Code.
     * @nullable
     */
    warehouseCode?: string;
    /**
     * Entry.
     * @nullable
     */
    entry?: number;
    /**
     * Cycle Code.
     * @nullable
     */
    cycleCode?: number;
    /**
     * Alert.
     * @nullable
     */
    alert?: BoYesNoEnum;
    /**
     * Destination User.
     * @nullable
     */
    destinationUser?: number;
    /**
     * Next Counting Date.
     * @nullable
     */
    nextCountingDate?: Moment;
    /**
     * Time.
     * @nullable
     */
    time?: Time;
    /**
     * Exclude Items With Zero Quantity.
     * @nullable
     */
    excludeItemsWithZeroQuantity?: BoYesNoEnum;
    /**
     * Change Existing Items.
     * @nullable
     */
    changeExistingItems?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[CycleCountDeterminationSetup.build]] instead.
 */
export declare function createCycleCountDeterminationSetup(json: any): CycleCountDeterminationSetup;
/**
 * CycleCountDeterminationSetupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CycleCountDeterminationSetupField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CycleCountDeterminationSetup> {
    /**
     * Representation of the [[CycleCountDeterminationSetup.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CycleCountDeterminationSetup.entry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    entry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CycleCountDeterminationSetup.cycleCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cycleCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CycleCountDeterminationSetup.alert]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    alert: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CycleCountDeterminationSetup.destinationUser]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    destinationUser: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CycleCountDeterminationSetup.nextCountingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nextCountingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[CycleCountDeterminationSetup.time]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    time: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[CycleCountDeterminationSetup.excludeItemsWithZeroQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    excludeItemsWithZeroQuantity: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CycleCountDeterminationSetup.changeExistingItems]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changeExistingItems: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of CycleCountDeterminationSetupField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CycleCountDeterminationSetup {
    /**
     * Metadata information on all properties of the `CycleCountDeterminationSetup` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CycleCountDeterminationSetup>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CycleCountDeterminationSetup;
}
//# sourceMappingURL=CycleCountDeterminationSetup.d.ts.map