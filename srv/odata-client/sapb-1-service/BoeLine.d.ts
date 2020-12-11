import { Moment } from 'moment';
import { BoBoeStatus } from './BoBoeStatus';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BoeLine
 */
export interface BoeLine {
    /**
     * Boe Key.
     * @nullable
     */
    boeKey?: number;
    /**
     * Boe Number.
     * @nullable
     */
    boeNumber?: number;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Bank.
     * @nullable
     */
    bank?: string;
    /**
     * Branch.
     * @nullable
     */
    branch?: string;
    /**
     * Account Number.
     * @nullable
     */
    accountNumber?: string;
    /**
     * Amount.
     * @nullable
     */
    amount?: number;
    /**
     * Boe Status.
     * @nullable
     */
    boeStatus?: BoBoeStatus;
    /**
     * Transferred.
     * @nullable
     */
    transferred?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[BoeLine.build]] instead.
 */
export declare function createBoeLine(json: any): BoeLine;
/**
 * BoeLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BoeLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BoeLine> {
    /**
     * Representation of the [[BoeLine.boeKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boeKey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BoeLine.boeNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boeNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BoeLine.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BoeLine.bank]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bank: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BoeLine.branch]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    branch: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BoeLine.accountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BoeLine.amount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BoeLine.boeStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boeStatus: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[BoeLine.transferred]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transferred: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of BoeLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BoeLine {
    /**
     * Metadata information on all properties of the `BoeLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BoeLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BoeLine;
}
//# sourceMappingURL=BoeLine.d.ts.map