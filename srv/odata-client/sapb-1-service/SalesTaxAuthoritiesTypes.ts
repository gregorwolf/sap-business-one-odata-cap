/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTaxAuthoritiesTypesRequestBuilder } from './SalesTaxAuthoritiesTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "SalesTaxAuthoritiesTypes" of service "SAPB1".
 */
export class SalesTaxAuthoritiesTypes extends Entity implements SalesTaxAuthoritiesTypesType {
  /**
   * Technical entity name for SalesTaxAuthoritiesTypes.
   */
  static _entityName = 'SalesTaxAuthoritiesTypes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SalesTaxAuthoritiesTypes.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Numerator.
   * @nullable
   */
  numerator?: number;
  /**
   * One-to-many navigation property to the [[DepreciationAreas]] entity.
   */
  depreciationAreas!: DepreciationAreas[];
  /**
   * One-to-many navigation property to the [[SalesTaxAuthorities]] entity.
   */
  salesTaxAuthorities!: SalesTaxAuthorities[];
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;

  /**
   * Returns an entity builder to construct instances `SalesTaxAuthoritiesTypes`.
   * @returns A builder that constructs instances of entity type `SalesTaxAuthoritiesTypes`.
   */
  static builder(): EntityBuilderType<SalesTaxAuthoritiesTypes, SalesTaxAuthoritiesTypesTypeForceMandatory> {
    return Entity.entityBuilder(SalesTaxAuthoritiesTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesTaxAuthoritiesTypes` entity type.
   * @returns A `SalesTaxAuthoritiesTypes` request builder.
   */
  static requestBuilder(): SalesTaxAuthoritiesTypesRequestBuilder {
    return new SalesTaxAuthoritiesTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesTaxAuthoritiesTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesTaxAuthoritiesTypes`.
   */
  static customField(fieldName: string): CustomField<SalesTaxAuthoritiesTypes> {
    return Entity.customFieldSelector(fieldName, SalesTaxAuthoritiesTypes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { DepreciationAreas, DepreciationAreasType } from './DepreciationAreas';
import { SalesTaxAuthorities, SalesTaxAuthoritiesType } from './SalesTaxAuthorities';
import { Users, UsersType } from './Users';

export interface SalesTaxAuthoritiesTypesType {
  userSignature?: number;
  name?: string;
  numerator?: number;
  depreciationAreas: DepreciationAreasType[];
  salesTaxAuthorities: SalesTaxAuthoritiesType[];
  user: UsersType;
}

export interface SalesTaxAuthoritiesTypesTypeForceMandatory {
  userSignature: number;
  name: string;
  numerator: number;
  depreciationAreas: DepreciationAreasType[];
  salesTaxAuthorities: SalesTaxAuthoritiesType[];
  user: UsersType;
}

export namespace SalesTaxAuthoritiesTypes {
  /**
   * Static representation of the [[userSignature]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SIGNATURE: NumberField<SalesTaxAuthoritiesTypes> = new NumberField('UserSignature', SalesTaxAuthoritiesTypes, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<SalesTaxAuthoritiesTypes> = new StringField('Name', SalesTaxAuthoritiesTypes, 'Edm.String');
  /**
   * Static representation of the [[numerator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMERATOR: NumberField<SalesTaxAuthoritiesTypes> = new NumberField('Numerator', SalesTaxAuthoritiesTypes, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[depreciationAreas]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_AREAS: OneToManyLink<SalesTaxAuthoritiesTypes, DepreciationAreas> = new OneToManyLink('DepreciationAreas', SalesTaxAuthoritiesTypes, DepreciationAreas);
  /**
   * Static representation of the one-to-many navigation property [[salesTaxAuthorities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_TAX_AUTHORITIES: OneToManyLink<SalesTaxAuthoritiesTypes, SalesTaxAuthorities> = new OneToManyLink('SalesTaxAuthorities', SalesTaxAuthoritiesTypes, SalesTaxAuthorities);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<SalesTaxAuthoritiesTypes, Users> = new OneToOneLink('User', SalesTaxAuthoritiesTypes, Users);
  /**
   * All fields of the SalesTaxAuthoritiesTypes entity.
   */
  export const _allFields: Array<NumberField<SalesTaxAuthoritiesTypes> | StringField<SalesTaxAuthoritiesTypes> | OneToManyLink<SalesTaxAuthoritiesTypes, DepreciationAreas> | OneToManyLink<SalesTaxAuthoritiesTypes, SalesTaxAuthorities> | OneToOneLink<SalesTaxAuthoritiesTypes, Users>> = [
    SalesTaxAuthoritiesTypes.USER_SIGNATURE,
    SalesTaxAuthoritiesTypes.NAME,
    SalesTaxAuthoritiesTypes.NUMERATOR,
    SalesTaxAuthoritiesTypes.DEPRECIATION_AREAS,
    SalesTaxAuthoritiesTypes.SALES_TAX_AUTHORITIES,
    SalesTaxAuthoritiesTypes.USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesTaxAuthoritiesTypes> = new AllFields('*', SalesTaxAuthoritiesTypes);
  /**
   * All key fields of the SalesTaxAuthoritiesTypes entity.
   */
  export const _keyFields: Array<Field<SalesTaxAuthoritiesTypes>> = [SalesTaxAuthoritiesTypes.NUMERATOR];
  /**
   * Mapping of all key field names to the respective static field property SalesTaxAuthoritiesTypes.
   */
  export const _keys: { [keys: string]: Field<SalesTaxAuthoritiesTypes> } = SalesTaxAuthoritiesTypes._keyFields.reduce((acc: { [keys: string]: Field<SalesTaxAuthoritiesTypes> }, field: Field<SalesTaxAuthoritiesTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
