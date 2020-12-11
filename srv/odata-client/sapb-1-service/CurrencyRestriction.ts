/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CurrencyRestriction
 */
export interface CurrencyRestriction {
  /**
   * Payment Method Code.
   * @nullable
   */
  paymentMethodCode?: string;
  /**
   * Currency Code.
   * @nullable
   */
  currencyCode?: string;
  /**
   * Currency Name.
   * @nullable
   */
  currencyName?: string;
  /**
   * Choose.
   * @nullable
   */
  choose?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[CurrencyRestriction.build]] instead.
 */
export function createCurrencyRestriction(json: any): CurrencyRestriction {
  return CurrencyRestriction.build(json);
}

/**
 * CurrencyRestrictionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CurrencyRestrictionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CurrencyRestriction> {
  /**
   * Representation of the [[CurrencyRestriction.paymentMethodCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMethodCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentMethodCode', this, 'Edm.String');
  /**
   * Representation of the [[CurrencyRestriction.currencyCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currencyCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CurrencyCode', this, 'Edm.String');
  /**
   * Representation of the [[CurrencyRestriction.currencyName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currencyName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CurrencyName', this, 'Edm.String');
  /**
   * Representation of the [[CurrencyRestriction.choose]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  choose: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Choose', this);

  /**
   * Creates an instance of CurrencyRestrictionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CurrencyRestriction);
  }
}

export namespace CurrencyRestriction {
  /**
   * Metadata information on all properties of the `CurrencyRestriction` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CurrencyRestriction>[] = [{
    originalName: 'PaymentMethodCode',
    name: 'paymentMethodCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CurrencyCode',
    name: 'currencyCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CurrencyName',
    name: 'currencyName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Choose',
    name: 'choose',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CurrencyRestriction {
    return deserializeComplexTypeV4(json, CurrencyRestriction);
  }
}
