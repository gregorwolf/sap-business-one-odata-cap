import { BoIssueMethod } from './BoIssueMethod';
import { ProductionItemType } from './ProductionItemType';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ProductTreeLine
 */
export interface ProductTreeLine {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Price.
     * @nullable
     */
    price?: number;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
    /**
     * Issue Method.
     * @nullable
     */
    issueMethod?: BoIssueMethod;
    /**
     * Inventory Uom.
     * @nullable
     */
    inventoryUom?: string;
    /**
     * Comment.
     * @nullable
     */
    comment?: string;
    /**
     * Parent Item.
     * @nullable
     */
    parentItem?: string;
    /**
     * Price List.
     * @nullable
     */
    priceList?: number;
    /**
     * Distribution Rule.
     * @nullable
     */
    distributionRule?: string;
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
     * Stage Id.
     * @nullable
     */
    stageId?: number;
    /**
     * Child Num.
     * @nullable
     */
    childNum?: number;
    /**
     * Visual Order.
     * @nullable
     */
    visualOrder?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ProductTreeLine.build]] instead.
 */
export declare function createProductTreeLine(json: any): ProductTreeLine;
/**
 * ProductTreeLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ProductTreeLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProductTreeLine> {
    /**
     * Representation of the [[ProductTreeLine.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.price]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    price: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.issueMethod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    issueMethod: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.inventoryUom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryUom: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.comment]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    comment: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.parentItem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    parentItem: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.priceList]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceList: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.project]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    project: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.wipAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wipAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.itemType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.lineText]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineText: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.additionalQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.childNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    childNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeLine.visualOrder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    visualOrder: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ProductTreeLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ProductTreeLine {
    /**
     * Metadata information on all properties of the `ProductTreeLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ProductTreeLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ProductTreeLine;
}
//# sourceMappingURL=ProductTreeLine.d.ts.map