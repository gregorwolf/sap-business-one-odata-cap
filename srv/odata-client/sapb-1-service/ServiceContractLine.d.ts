import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class ServiceContractLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace ServiceContractLine {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceContractLine;
}
//# sourceMappingURL=ServiceContractLine.d.ts.map