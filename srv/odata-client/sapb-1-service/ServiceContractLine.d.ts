import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ServiceContractLine
 */
export interface ServiceContractLine {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Manufacturer Serial Num.
     * @nullable
     */
    manufacturerSerialNum?: string;
    /**
     * Internal Serial Num.
     * @nullable
     */
    internalSerialNum?: string;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Item Name.
     * @nullable
     */
    itemName?: string;
    /**
     * Item Group.
     * @nullable
     */
    itemGroup?: number;
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
     * Item Group Name.
     * @nullable
     */
    itemGroupName?: string;
    /**
     * Termination Date.
     * @nullable
     */
    terminationDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceContractLine.build]] instead.
 */
export declare function createServiceContractLine(json: any): ServiceContractLine;
/**
 * ServiceContractLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceContractLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceContractLine> {
    /**
     * Representation of the [[ServiceContractLine.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceContractLine.manufacturerSerialNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufacturerSerialNum: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceContractLine.internalSerialNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalSerialNum: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceContractLine.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceContractLine.itemName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceContractLine.itemGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemGroup: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceContractLine.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ServiceContractLine.endDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    endDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ServiceContractLine.itemGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemGroupName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceContractLine.terminationDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    terminationDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of ServiceContractLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceContractLine {
    /**
     * Metadata information on all properties of the `ServiceContractLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceContractLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceContractLine;
}
//# sourceMappingURL=ServiceContractLine.d.ts.map