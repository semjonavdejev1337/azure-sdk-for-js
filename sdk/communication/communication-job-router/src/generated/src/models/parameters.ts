/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-http";
import {
  ClassificationPolicy as ClassificationPolicyMapper,
  DistributionPolicy as DistributionPolicyMapper,
  ExceptionPolicy as ExceptionPolicyMapper,
  RouterJob as RouterJobMapper,
  CancelJobRequest as CancelJobRequestMapper,
  CompleteJobRequest as CompleteJobRequestMapper,
  CloseJobRequest as CloseJobRequestMapper,
  JobQueue as JobQueueMapper,
  RouterWorker as RouterWorkerMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const classificationPolicy: OperationParameter = {
  parameterPath: "classificationPolicy",
  mapper: ClassificationPolicyMapper
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const repeatabilityRequestId: OperationParameter = {
  parameterPath: ["options", "repeatabilityRequestId"],
  mapper: {
    serializedName: "repeatability-request-id",
    type: {
      name: "String"
    }
  }
};

export const repeatabilityFirstSent: OperationParameter = {
  parameterPath: ["options", "repeatabilityFirstSent"],
  mapper: {
    serializedName: "repeatability-first-sent",
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-10-20-preview2",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const maxpagesize: OperationQueryParameter = {
  parameterPath: ["options", "maxpagesize"],
  mapper: {
    defaultValue: 20,
    serializedName: "maxpagesize",
    type: {
      name: "Number"
    }
  }
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/merge-patch+json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const patch: OperationParameter = {
  parameterPath: "patch",
  mapper: ClassificationPolicyMapper
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const distributionPolicy: OperationParameter = {
  parameterPath: "distributionPolicy",
  mapper: DistributionPolicyMapper
};

export const patch1: OperationParameter = {
  parameterPath: ["options", "patch"],
  mapper: DistributionPolicyMapper
};

export const exceptionPolicy: OperationParameter = {
  parameterPath: "exceptionPolicy",
  mapper: ExceptionPolicyMapper
};

export const patch2: OperationParameter = {
  parameterPath: ["options", "patch"],
  mapper: ExceptionPolicyMapper
};

export const routerJob: OperationParameter = {
  parameterPath: "routerJob",
  mapper: RouterJobMapper
};

export const status: OperationQueryParameter = {
  parameterPath: ["options", "status"],
  mapper: {
    defaultValue: "all",
    serializedName: "status",
    type: {
      name: "Enum",
      allowedValues: [
        "all",
        "pendingClassification",
        "queued",
        "assigned",
        "completed",
        "closed",
        "cancelled",
        "classificationFailed",
        "active"
      ]
    }
  }
};

export const queueId: OperationQueryParameter = {
  parameterPath: ["options", "queueId"],
  mapper: {
    serializedName: "queueId",
    type: {
      name: "String"
    }
  }
};

export const channelId: OperationQueryParameter = {
  parameterPath: ["options", "channelId"],
  mapper: {
    serializedName: "channelId",
    type: {
      name: "String"
    }
  }
};

export const patch3: OperationParameter = {
  parameterPath: ["options", "patch"],
  mapper: RouterJobMapper
};

export const forceClassification: OperationQueryParameter = {
  parameterPath: ["options", "forceClassification"],
  mapper: {
    defaultValue: false,
    serializedName: "forceClassification",
    type: {
      name: "Boolean"
    }
  }
};

export const note: OperationParameter = {
  parameterPath: ["options", "note"],
  mapper: CancelJobRequestMapper
};

export const dispositionCode: OperationParameter = {
  parameterPath: ["options", "dispositionCode"],
  mapper: CancelJobRequestMapper
};

export const assignmentId: OperationParameter = {
  parameterPath: "assignmentId",
  mapper: CompleteJobRequestMapper
};

export const note1: OperationParameter = {
  parameterPath: ["options", "note"],
  mapper: CompleteJobRequestMapper
};

export const assignmentId1: OperationParameter = {
  parameterPath: "assignmentId",
  mapper: CloseJobRequestMapper
};

export const dispositionCode1: OperationParameter = {
  parameterPath: ["options", "dispositionCode"],
  mapper: CloseJobRequestMapper
};

export const closeTime: OperationParameter = {
  parameterPath: ["options", "closeTime"],
  mapper: CloseJobRequestMapper
};

export const note2: OperationParameter = {
  parameterPath: ["options", "note"],
  mapper: CloseJobRequestMapper
};

export const offerId: OperationURLParameter = {
  parameterPath: "offerId",
  mapper: {
    serializedName: "offerId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const workerId: OperationURLParameter = {
  parameterPath: "workerId",
  mapper: {
    serializedName: "workerId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const jobQueue: OperationParameter = {
  parameterPath: "jobQueue",
  mapper: JobQueueMapper
};

export const patch4: OperationParameter = {
  parameterPath: ["options", "patch"],
  mapper: JobQueueMapper
};

export const routerWorker: OperationParameter = {
  parameterPath: "routerWorker",
  mapper: RouterWorkerMapper
};

export const status1: OperationQueryParameter = {
  parameterPath: ["options", "status"],
  mapper: {
    defaultValue: "all",
    serializedName: "status",
    type: {
      name: "Enum",
      allowedValues: ["active", "draining", "inactive", "all"]
    }
  }
};

export const hasCapacity: OperationQueryParameter = {
  parameterPath: ["options", "hasCapacity"],
  mapper: {
    serializedName: "hasCapacity",
    type: {
      name: "Boolean"
    }
  }
};

export const patch5: OperationParameter = {
  parameterPath: ["options", "patch"],
  mapper: RouterWorkerMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
