/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage } from './TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriod
 */
export interface TaxCodeDeterminationTcdKeyFieldValuePeriod {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Efct From.
   * @nullable
   */
  efctFrom?: Moment;
  /**
   * Efct To.
   * @nullable
   */
  efctTo?: Moment;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: string;
  /**
   * Tax Code Determination Tcd Key Field Value Period By Usages.
   * @nullable
   */
  taxCodeDeterminationTcdKeyFieldValuePeriodByUsages?: TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage[];
}

/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValuePeriod.build]] instead.
 */
export function createTaxCodeDeterminationTcdKeyFieldValuePeriod(json: any): TaxCodeDeterminationTcdKeyFieldValuePeriod {
  return TaxCodeDeterminationTcdKeyFieldValuePeriod.build(json);
}

/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriodField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdKeyFieldValuePeriodField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationTcdKeyFieldValuePeriod> {
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.efctFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  efctFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EfctFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.efctTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  efctTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EfctTo', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxCode', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.taxCodeDeterminationTcdKeyFieldValuePeriodByUsages]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCodeDeterminationTcdKeyFieldValuePeriodByUsages: CollectionField<EntityT, TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage> = new CollectionField('TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages', this, TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage);

  /**
   * Creates an instance of TaxCodeDeterminationTcdKeyFieldValuePeriodField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxCodeDeterminationTcdKeyFieldValuePeriod);
  }
}

export namespace TaxCodeDeterminationTcdKeyFieldValuePeriod {
  /**
   * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyFieldValuePeriod` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdKeyFieldValuePeriod>[] = [{
    originalName: 'AbsId',
    name: 'absId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'EfctFrom',
    name: 'efctFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'EfctTo',
    name: 'efctTo',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'TaxCode',
    name: 'taxCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages',
    name: 'taxCodeDeterminationTcdKeyFieldValuePeriodByUsages',
    type: TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage }): TaxCodeDeterminationTcdKeyFieldValuePeriod {
    return deserializeComplexTypeV4(json, TaxCodeDeterminationTcdKeyFieldValuePeriod);
  }
}
