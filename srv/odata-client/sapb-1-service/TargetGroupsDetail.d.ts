import { TargetGroupsDetailStatusEnum } from './TargetGroupsDetailStatusEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TargetGroupsDetail
 */
export interface TargetGroupsDetail {
    /**
     * Target Group Code.
     * @nullable
     */
    targetGroupCode?: string;
    /**
     * Business Partner Code.
     * @nullable
     */
    businessPartnerCode?: string;
    /**
     * Business Partner Name.
     * @nullable
     */
    businessPartnerName?: string;
    /**
     * Group Code.
     * @nullable
     */
    groupCode?: string;
    /**
     * Industry.
     * @nullable
     */
    industry?: string;
    /**
     * Active Status.
     * @nullable
     */
    activeStatus?: TargetGroupsDetailStatusEnum;
    /**
     * Contact Person.
     * @nullable
     */
    contactPerson?: string;
    /**
     * Title.
     * @nullable
     */
    title?: string;
    /**
     * Position.
     * @nullable
     */
    position?: string;
    /**
     * E Mail.
     * @nullable
     */
    eMail?: string;
    /**
     * Telephone.
     * @nullable
     */
    telephone?: string;
    /**
     * Mobile Phone.
     * @nullable
     */
    mobilePhone?: string;
    /**
     * Fax.
     * @nullable
     */
    fax?: string;
    /**
     * Address.
     * @nullable
     */
    address?: string;
    /**
     * Street.
     * @nullable
     */
    street?: string;
    /**
     * Block.
     * @nullable
     */
    block?: string;
    /**
     * City.
     * @nullable
     */
    city?: string;
    /**
     * Zip Code.
     * @nullable
     */
    zipCode?: string;
    /**
     * County.
     * @nullable
     */
    county?: string;
    /**
     * State.
     * @nullable
     */
    state?: string;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * Building.
     * @nullable
     */
    building?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TargetGroupsDetail.build]] instead.
 */
export declare function createTargetGroupsDetail(json: any): TargetGroupsDetail;
/**
 * TargetGroupsDetailField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TargetGroupsDetailField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TargetGroupsDetail> {
    /**
     * Representation of the [[TargetGroupsDetail.targetGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetGroupCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.businessPartnerCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    businessPartnerCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.businessPartnerName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    businessPartnerName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.groupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.industry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    industry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.activeStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activeStatus: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contactPerson: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.title]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    title: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.position]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    position: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.eMail]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    eMail: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.telephone]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    telephone: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.mobilePhone]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    mobilePhone: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.fax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fax: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.address]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    address: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.street]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    street: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.block]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    block: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.city]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    city: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    zipCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.county]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    county: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.state]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    state: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.country]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    country: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupsDetail.building]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    building: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of TargetGroupsDetailField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TargetGroupsDetail {
    /**
     * Metadata information on all properties of the `TargetGroupsDetail` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TargetGroupsDetail>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TargetGroupsDetail;
}
//# sourceMappingURL=TargetGroupsDetail.d.ts.map