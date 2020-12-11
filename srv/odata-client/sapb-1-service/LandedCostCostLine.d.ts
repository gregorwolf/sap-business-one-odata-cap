import { LandedCostAllocationByEnum } from './LandedCostAllocationByEnum';
import { LcCostTypeEnum } from './LcCostTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { LandedCostCostCategoryEnum } from './LandedCostCostCategoryEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * LandedCostCostLine
 */
export interface LandedCostCostLine {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Landed Cost Code.
     * @nullable
     */
    landedCostCode?: string;
    /**
     * Allocation By.
     * @nullable
     */
    allocationBy?: LandedCostAllocationByEnum;
    /**
     * Amount.
     * @nullable
     */
    amount?: number;
    /**
     * Amount Fc.
     * @nullable
     */
    amountFc?: number;
    /**
     * Factor.
     * @nullable
     */
    factor?: number;
    /**
     * Cost Type.
     * @nullable
     */
    costType?: LcCostTypeEnum;
    /**
     * Include For Customs.
     * @nullable
     */
    includeForCustoms?: BoYesNoEnum;
    /**
     * Open Amount.
     * @nullable
     */
    openAmount?: number;
    /**
     * Open Amount Fc.
     * @nullable
     */
    openAmountFc?: number;
    /**
     * Broker.
     * @nullable
     */
    broker?: string;
    /**
     * Broker Name.
     * @nullable
     */
    brokerName?: string;
    /**
     * Cost Category.
     * @nullable
     */
    costCategory?: LandedCostCostCategoryEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[LandedCostCostLine.build]] instead.
 */
export declare function createLandedCostCostLine(json: any): LandedCostCostLine;
/**
 * LandedCostCostLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LandedCostCostLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, LandedCostCostLine> {
    /**
     * Representation of the [[LandedCostCostLine.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.landedCostCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    landedCostCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.allocationBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allocationBy: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.amount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.amountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.factor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.costType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.includeForCustoms]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    includeForCustoms: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.openAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.openAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.broker]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    broker: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.brokerName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    brokerName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.costCategory]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costCategory: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of LandedCostCostLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace LandedCostCostLine {
    /**
     * Metadata information on all properties of the `LandedCostCostLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<LandedCostCostLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): LandedCostCostLine;
}
//# sourceMappingURL=LandedCostCostLine.d.ts.map