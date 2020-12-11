/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage
 */
export interface TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Usage Code.
   * @nullable
   */
  usageCode?: number;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: string;
  /**
   * Exp Tax Code.
   * @nullable
   */
  expTaxCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.build]] instead.
 */
export function createTaxCodeDeterminationTcdKeyFieldValuePeriodByUsage(json: any): TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage {
  return TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.build(json);
}

/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage> {
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.usageCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  usageCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UsageCode', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxCode', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.expTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expTaxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExpTaxCode', this, 'Edm.String');

  /**
   * Creates an instance of TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage);
  }
}

export namespace TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage {
  /**
   * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage>[] = [{
    originalName: 'AbsId',
    name: 'absId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UsageCode',
    name: 'usageCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TaxCode',
    name: 'taxCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ExpTaxCode',
    name: 'expTaxCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage {
    return deserializeComplexTypeV4(json, TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage);
  }
}
