import { Moment } from 'moment';
import { SerialNumber } from './SerialNumber';
import { BatchNumber } from './BatchNumber';
import { BoIssueMethod } from './BoIssueMethod';
import { ProductionItemType } from './ProductionItemType';
import { ResourceAllocationEnum } from './ResourceAllocationEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ProductionOrderLine
 */
export interface ProductionOrderLine {
    /**
     * Document Absolute Entry.
     * @nullable
     */
    documentAbsoluteEntry?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Item No.
     * @nullable
     */
    itemNo?: string;
    /**
     * Base Quantity.
     * @nullable
     */
    baseQuantity?: number;
    /**
     * Planned Quantity.
     * @nullable
     */
    plannedQuantity?: number;
    /**
     * Issued Quantity.
     * @nullable
     */
    issuedQuantity?: number;
    /**
     * Production Order Issue Type.
     * @nullable
     */
    productionOrderIssueType?: BoIssueMethod;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Visual Order.
     * @nullable
     */
    visualOrder?: number;
    /**
     * Distribution Rule.
     * @nullable
     */
    distributionRule?: string;
    /**
     * Location Code.
     * @nullable
     */
    locationCode?: number;
    /**
     * Project.
     * @nullable
     */
    project?: string;
    /**
     * Distribution Rule 2.
     * @nullable
     */
    distributionRule2?: string;
    /**
     * Distribution Rule 3.
     * @nullable
     */
    distributionRule3?: string;
    /**
     * Distribution Rule 4.
     * @nullable
     */
    distributionRule4?: string;
    /**
     * Distribution Rule 5.
     * @nullable
     */
    distributionRule5?: string;
    /**
     * Uo M Entry.
     * @nullable
     */
    uoMEntry?: number;
    /**
     * Uo M Code.
     * @nullable
     */
    uoMCode?: number;
    /**
     * Wip Account.
     * @nullable
     */
    wipAccount?: string;
    /**
     * Item Type.
     * @nullable
     */
    itemType?: ProductionItemType;
    /**
     * Line Text.
     * @nullable
     */
    lineText?: string;
    /**
     * Additional Quantity.
     * @nullable
     */
    additionalQuantity?: number;
    /**
     * Resource Allocation.
     * @nullable
     */
    resourceAllocation?: ResourceAllocationEnum;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Stage Id.
     * @nullable
     */
    stageId?: number;
    /**
     * Required Days.
     * @nullable
     */
    requiredDays?: number;
    /**
     * Serial Numbers.
     * @nullable
     */
    serialNumbers?: SerialNumber[];
    /**
     * Batch Numbers.
     * @nullable
     */
    batchNumbers?: BatchNumber[];
}
/**
 * @deprecated Since v1.6.0. Use [[ProductionOrderLine.build]] instead.
 */
export declare function createProductionOrderLine(json: any): ProductionOrderLine;
/**
 * ProductionOrderLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ProductionOrderLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProductionOrderLine> {
    /**
     * Representation of the [[ProductionOrderLine.documentAbsoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentAbsoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.itemNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.baseQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.plannedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    plannedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.issuedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    issuedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.productionOrderIssueType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    productionOrderIssueType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.visualOrder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    visualOrder: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.locationCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    locationCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.project]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    project: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.uoMCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.wipAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wipAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.itemType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.lineText]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineText: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.additionalQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.resourceAllocation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    resourceAllocation: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.endDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    endDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.requiredDays]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    requiredDays: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrderLine.serialNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serialNumbers: CollectionField<EntityT, SerialNumber>;
    /**
     * Representation of the [[ProductionOrderLine.batchNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    batchNumbers: CollectionField<EntityT, BatchNumber>;
    /**
     * Creates an instance of ProductionOrderLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ProductionOrderLine {
    /**
     * Metadata information on all properties of the `ProductionOrderLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ProductionOrderLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | BatchNumber | SerialNumber;
    }): ProductionOrderLine;
}
//# sourceMappingURL=ProductionOrderLine.d.ts.map