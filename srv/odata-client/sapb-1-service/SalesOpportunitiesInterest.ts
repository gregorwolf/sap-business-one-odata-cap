/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SalesOpportunitiesInterest
 */
export interface SalesOpportunitiesInterest {
  /**
   * Row No.
   * @nullable
   */
  rowNo?: number;
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
  /**
   * Primary Interest.
   * @nullable
   */
  primaryInterest?: BoYesNoEnum;
  /**
   * Interest Id.
   * @nullable
   */
  interestId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesInterest.build]] instead.
 */
export function createSalesOpportunitiesInterest(json: any): SalesOpportunitiesInterest {
  return SalesOpportunitiesInterest.build(json);
}

/**
 * SalesOpportunitiesInterestField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesInterestField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunitiesInterest> {
  /**
   * Representation of the [[SalesOpportunitiesInterest.rowNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesInterest.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesInterest.primaryInterest]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  primaryInterest: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PrimaryInterest', this);
  /**
   * Representation of the [[SalesOpportunitiesInterest.interestId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  interestId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InterestId', this, 'Edm.Int32');

  /**
   * Creates an instance of SalesOpportunitiesInterestField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesOpportunitiesInterest);
  }
}

export namespace SalesOpportunitiesInterest {
  /**
   * Metadata information on all properties of the `SalesOpportunitiesInterest` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunitiesInterest>[] = [{
    originalName: 'RowNo',
    name: 'rowNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SequenceNo',
    name: 'sequenceNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PrimaryInterest',
    name: 'primaryInterest',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'InterestId',
    name: 'interestId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesOpportunitiesInterest {
    return deserializeComplexTypeV4(json, SalesOpportunitiesInterest);
  }
}
