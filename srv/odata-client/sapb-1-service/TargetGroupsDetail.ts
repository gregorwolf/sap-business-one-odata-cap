/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createTargetGroupsDetail(json: any): TargetGroupsDetail {
  return TargetGroupsDetail.build(json);
}

/**
 * TargetGroupsDetailField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TargetGroupsDetailField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TargetGroupsDetail.targetGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetGroupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TargetGroupCode', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.businessPartnerCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessPartnerCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BusinessPartnerCode', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.businessPartnerName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessPartnerName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BusinessPartnerName', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.groupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GroupCode', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.industry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  industry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Industry', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.contactPerson]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactPerson: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ContactPerson', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.title]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  title: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Title', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.position]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  position: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Position', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.eMail]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eMail: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('E_Mail', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.telephone]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  telephone: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Telephone', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.mobilePhone]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mobilePhone: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('MobilePhone', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.fax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fax: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Fax', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.address]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Address', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.street]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  street: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Street', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.block]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  block: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Block', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.city]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  city: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('City', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ZipCode', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.county]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  county: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('County', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.state]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('State', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.country]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Country', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.building]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  building: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Building', this, 'Edm.String');
}

export namespace TargetGroupsDetail {
  export function build(json: { [keys: string]: FieldType }): TargetGroupsDetail {
    return createComplexType(json, {
      TargetGroupCode: (targetGroupCode: string) => ({ targetGroupCode: edmToTs(targetGroupCode, 'Edm.String') }),
      BusinessPartnerCode: (businessPartnerCode: string) => ({ businessPartnerCode: edmToTs(businessPartnerCode, 'Edm.String') }),
      BusinessPartnerName: (businessPartnerName: string) => ({ businessPartnerName: edmToTs(businessPartnerName, 'Edm.String') }),
      GroupCode: (groupCode: string) => ({ groupCode: edmToTs(groupCode, 'Edm.String') }),
      Industry: (industry: string) => ({ industry: edmToTs(industry, 'Edm.String') }),
      ContactPerson: (contactPerson: string) => ({ contactPerson: edmToTs(contactPerson, 'Edm.String') }),
      Title: (title: string) => ({ title: edmToTs(title, 'Edm.String') }),
      Position: (position: string) => ({ position: edmToTs(position, 'Edm.String') }),
      E_Mail: (eMail: string) => ({ eMail: edmToTs(eMail, 'Edm.String') }),
      Telephone: (telephone: string) => ({ telephone: edmToTs(telephone, 'Edm.String') }),
      MobilePhone: (mobilePhone: string) => ({ mobilePhone: edmToTs(mobilePhone, 'Edm.String') }),
      Fax: (fax: string) => ({ fax: edmToTs(fax, 'Edm.String') }),
      Address: (address: string) => ({ address: edmToTs(address, 'Edm.String') }),
      Street: (street: string) => ({ street: edmToTs(street, 'Edm.String') }),
      Block: (block: string) => ({ block: edmToTs(block, 'Edm.String') }),
      City: (city: string) => ({ city: edmToTs(city, 'Edm.String') }),
      ZipCode: (zipCode: string) => ({ zipCode: edmToTs(zipCode, 'Edm.String') }),
      County: (county: string) => ({ county: edmToTs(county, 'Edm.String') }),
      State: (state: string) => ({ state: edmToTs(state, 'Edm.String') }),
      Country: (country: string) => ({ country: edmToTs(country, 'Edm.String') }),
      Building: (building: string) => ({ building: edmToTs(building, 'Edm.String') })
    });
  }
}
