/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SalesOpportunityInterestSetupParams
 */
export interface SalesOpportunityInterestSetupParams {
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunityInterestSetupParams.build]] instead.
 */
export function createSalesOpportunityInterestSetupParams(json: any): SalesOpportunityInterestSetupParams {
  return SalesOpportunityInterestSetupParams.build(json);
}

/**
 * SalesOpportunityInterestSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunityInterestSetupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunityInterestSetupParams> {
  /**
   * Representation of the [[SalesOpportunityInterestSetupParams.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunityInterestSetupParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');

  /**
   * Creates an instance of SalesOpportunityInterestSetupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesOpportunityInterestSetupParams);
  }
}

export namespace SalesOpportunityInterestSetupParams {
  /**
   * Metadata information on all properties of the `SalesOpportunityInterestSetupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunityInterestSetupParams>[] = [{
    originalName: 'SequenceNo',
    name: 'sequenceNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Description',
    name: 'description',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesOpportunityInterestSetupParams {
    return deserializeComplexTypeV4(json, SalesOpportunityInterestSetupParams);
  }
}
